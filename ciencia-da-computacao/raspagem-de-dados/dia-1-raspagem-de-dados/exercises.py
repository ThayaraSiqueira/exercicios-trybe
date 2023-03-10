import requests
import parsel

response =  requests.get('https://httpbin.org/encoding/utf8')
print(response.text)

response2 =  requests.get('https://api.github.com/users')
users = response2.json()
for user in users:
    print(f"{user['login']} {user['url']}")

response3 = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
assert "bot detected" not in response3.text


URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)

title = selector.css("h1::text").get()

price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}")
availability = selector.css(".product_main .availability::text")

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()

print(title, price, description, cover, availability, sep=",")