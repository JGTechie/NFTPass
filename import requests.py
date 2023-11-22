import requests

# Step 1: Get Data from the London Tube Station API
first_api_url = "http://localhost:3000/"
response_first_api = requests.get(first_api_url)
tube_station_names = response_first_api.json()  # Assuming the response is in JSON format

# Step 2: Format Data for the Second API
text_for_image_generation = ', '.join(tube_station_names)

# Step 3: Make a Request to the text2img API
second_api_url = "https://stablediffusionapi.com/api/v3/text2img"
payload = {'text': text_for_image_generation}
response_second_api = requests.post(second_api_url, json=payload)

# Step 4: Handle Errors and Edge Cases
if response_second_api.status_code == 200:
    generated_image_url = response_second_api.json()['image_url']
    print(f"Image generated successfully: {generated_image_url}")
else:
    print(f"Error generating image. Status code: {response_second_api.status_code}")
    print(f"Response: {response_second_api.text}")
