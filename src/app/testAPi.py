from dotenv import load_dotenv
import os
import google.generativeai as genai  # Correct import

# 1. Load environment variables
load_dotenv()
# 2. Configure the API (NEW way)
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
# 3. Create model and generate content
model = genai.GenerativeModel('gemini-1.5-flash')  # Updated model name
response = model.generate_content("Can you summarize this video: https://www.youtube.com/watch?v=JIbIYCM48to")

print(response.text)