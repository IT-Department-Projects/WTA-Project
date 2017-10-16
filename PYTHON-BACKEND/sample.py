import pickle
import csv
import numpy as np
import pandas as pd
import sklearn
from sklearn.neighbors import NearestNeighbors

f = open('music.csv')
csv_f = csv.reader(f)
"""
d={}
for row in csv_f:
	d[row[2]]=[]
	
	d[row[2]].append(float(row[0]))
	d[row[2]].append(float(row[5]))
	d[row[2]].append(float(row[6]))
	d[row[2]].append(float(row[7]))
	d[row[2]].append(float(row[8]))
	d[row[2]].append(float(row[9]))
	d[row[2]].append(float(row[10]))
	if row[11] == '':
		row[11]=0.0
	d[row[2]].append(float(row[11]))
	d[row[2]].append(float(row[13]))
	d[row[2]].append(float(row[17]))
	d[row[2]].append(float(row[19]))
	d[row[2]].append(float(row[25]))
	d[row[2]].append(float(row[26]))
	d[row[2]].append(float(row[27]))
	d[row[2]].append(float(row[28]))

pickle_out=open('dict.pickle','wb')
pickle.dump(d,pickle_out)
pickle_out.close()
"""


music_data = pd.read_csv('music.csv')
music_data.columns = ['artist.hotttnesss','artist.id','artist.name','artist_mbtags','artist_mbtags_count','bars_confidence','bars_start','beats_confidence','beats_start','duration','end_of_fade_in','familiarity','key','key_confidence','latitude','location','longitude','loudness','mode','mode_confidence','release.id','release.name','similar','song.hotttnesss','song.id','start_of_fade_out','tatums_confidence','tatums_start','tempo','terms','terms_freq','time_signature','time_signature_confidence','title','year']


pickle_in=open('dict.pickle','rb')
d=pickle.load(pickle_in)
t = d['John Wesley']

X = music_data.ix[:,(0,5,6,7,8,9,10,11,13,17,19,25,26,27,28)].values
"""
pickle_out=open('dataset.pickle','wb')
pickle.dump(X,pickle_out)
pickle_out.close()
"""

pickle_in=open('dataset.pickle','rb')
X=pickle.load(pickle_in)

#print(X[:5])

nbrs = NearestNeighbors(n_neighbors=5).fit(X[:3600])
knb = nbrs.kneighbors([t],return_distance=False)

music_values = music_data.values
artist_name = []
album_name = []
song_name = []

for i in knb[0]:
    artist_name.append(music_values[i][2])
    album_name.append(music_values[i][21])
    song_name.append(music_values[i][33])


#Recommended songs
for i in range(0,5):
    print(artist_name[i],",",album_name[i],",",song_name[i])

"""
artist.hotttnesss 0
bars_confidence 5
bars_start 6
beats_confidence 7
beats_start 8
duration 9
end_of_fade_in 10
familiarity 11
key_confidence 13
loudness 17
mode_confidence 19
start_of_fade_out 25
tatums_confidence 26
tatums_start 27
tempo 28
"""
