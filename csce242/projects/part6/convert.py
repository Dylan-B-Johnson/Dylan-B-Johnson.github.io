from bs4 import BeautifulSoup
import requests
from urllib.request import urlopen
import json
from pathlib import Path

SAVE_GLAZY_JSONS = True

def html_to_json(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
#    print("soup", soup)
    sections = soup.find_all('div', class_='placcard placcard-glazes')
#    print("sections", sections)
    jsond = []
    i = 0
    for section in sections:
#        print("section", section)
        name = section.find('p', class_='').text.strip()
#        print("name", name)
        table = section.find('table')
#        print("table",table )
        recipe_data = []
        # Iterate over table rows
        for row in table.find_all('tr'):
            cells = row.find_all('td')
            if len(cells) == 2:
                material = cells[0].text.strip()
                amount = cells[1].text.strip()
                recipe_data.append({'material': material, 'amount': amount})
        a = section.find("a")
        img = section.find("img")
        image = img['src']
        link = a['href']
        number = link.split('/')[-1]
        url = "https://api.glazy.org/api/recipes/" + number
        jsonurl = urlopen(url)
        glazy_json = json.loads(jsonurl.read())
        if SAVE_GLAZY_JSONS:
            Path("./glazy-jsons").mkdir(parents=True, exist_ok=True)
            with open("./glazy-jsons/" + number + '.json', 'w') as f:
                json.dump(glazy_json, f)
        cone = glazy_json['data']['fromOrtonConeName'] 
        credit = a.text[8:]
        json_data = {'_id': i, 'image': image, 'recipe': recipe_data, 'name': name, 'link': link, 'credit': credit, 'cone': cone}
        jsond.append(json_data)
        i += 1
    return json.dumps(jsond)

with open('./glazes.html', 'r') as f:
    html_content = f.read()

json_output = html_to_json(html_content)
print(json_output)
