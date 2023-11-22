import requests

# API endpoint
api_url = "https://stablediffusionapi.com/api/v3/text2img"

# Replace 'your_api_key' with your actual API key
api_key = 'W1AnHj3RLCdjZ5f7JbGVMx7A75JGdCJtOUU0sAJpi8BZ2kGYy5FN1IpamOch'

# Example text
text_to_generate_image = "http://localhost:${PORT}"

# Payload for the API request
payload = {
    'api_key': api_key,
    'text': text_to_generate_image,
}

# Make a request to the API
response = requests.post(api_url, json=payload)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Assuming the API response provides the image URL
    image_url = response.json().get('image_url')
    print(f"Image generated successfully. Image URL: {image_url}")
else:
    print(f"Error generating image. Status code: {response.status_code}")
    print(f"Response: {response.text}")

