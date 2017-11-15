import bs4,requests
query = "query"
UrL = "https://www.youtube.com/results?search_query="+query
#UrL = "https://www.youtube.com/results?search_query=Joe+Sent+Me+Vanessa+Daou+Joe+Sent+Me"

handle = requests.get(UrL).content

#print handle
soup = bs4.BeautifulSoup(handle,"lxml")
selector = "div.yt-lockup-dismissable.yt-uix-tile > div.yt-lockup-thumbnail.contains-addto > a"
elems = soup.select(selector)
helper = "https://www.youtube.com/embed" + elems[0].get('href')
print helper
