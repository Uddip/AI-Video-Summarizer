from dotenv import load_dotenv
import os
import google.generativeai as genai
import re 

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# (though the tool's output is the main driver of consistency here)
model = genai.GenerativeModel(
    'gemini-1.5-flash',
    generation_config=genai.types.GenerationConfig(
        temperature=0.1
    )
)

def is_valid_youtube_url(url):
    """
    Validates if a given URL is a standard, publicly accessible YouTube video link.
    This regex covers common YouTube and YouTube short (youtu.be) formats.
    """
    youtube_regex = (
        r'(https?://)?(www\.)?'
        '(youtube|youtu|youtube-nocookie)\.(com|be)/'
        '(watch\?v=|embed/|v/|.+\?v=)?([^&=%\?]{11})') 
    
    match = re.match(youtube_regex, url)
    
    if match:

        video_id = match.group(6)
        return len(video_id) == 11
    return False

def get_video_summary(video_url):

  
    if not is_valid_youtube_url(video_url):
        return "Error: Invalid YouTube URL provided. Please enter a standard YouTube video link (e.g., https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID)."

    prompt = f"Summarize this video: {video_url}"
    
    try:
        response = model.generate_content(prompt)
        
        for part in response.parts:
            if hasattr(part, 'function_response') and part.function_response:
                if part.function_response.name == "youtube.question_answer":
     
                    if hasattr(part.function_response.response, 'text'):
                        return part.function_response.response.text
                    elif isinstance(part.function_response.response, dict) and 'text' in part.function_response.response:
                        return part.function_response.response['text']
                    else:
              
                        return f"Summary from tool (unparsed format): {str(part.function_response.response)}"

        print("Warning: No specific tool response found. Returning general model text.")
        return response.text 
        
    except Exception as e:
        return f"An error occurred while summarizing the video: {e}"

user_input_url = input("Please enter a YouTube video URL to summarize: ")

summary = get_video_summary(user_input_url)

print("\n--- Video Summary ---")
print(summary)
