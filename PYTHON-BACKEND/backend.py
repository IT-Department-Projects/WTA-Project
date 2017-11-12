from flask import Flask,jsonify
from flask import abort
from flask import make_response
from flask import request
from flask import url_for
import pickle
import csv
import numpy as np
import pandas as pd
import sklearn
from sklearn.neighbors import NearestNeighbors
import re

app = Flask(__name__)

music_data = pd.read_csv('music.csv')
music_values = music_data.values

pickle_in=open('dict.pickle','rb')
d=pickle.load(pickle_in)

pickle_in=open('dataset.pickle','rb')
X=pickle.load(pickle_in)

pickle_in=open('training.pickle','rb')
nbrs=pickle.load(pickle_in)


recommendation=[]

@app.route('/music/api/getRecommendations', methods=['GET'])
def get_tasks():
	return jsonify(recommendation[-5:])


@app.route('/music/api/postArtist',methods = ["POST"])
def create_task():
	if not request.json or not 'artist' in request.json:
		abort(400)
	result = {'artist':request.json['artist']}
	result=result['artist']
	try:
		t=d[result]
	except Exception:
		abort(404)
	else:
		knb=nbrs.kneighbors([t],return_distance=False)
		artist_name = []
		album_name = []
		song_name = []

		for i in knb[0]:
			artist_name.append(music_values[i][2])
			album_name.append(music_values[i][21])
			song_name.append(music_values[i][33])

		for i in range(0,5):
			
			update_name=re.sub(r"\s+", '+', artist_name[i])
			update_album=re.sub(r"\s+", '+', album_name[i])
			update_song=re.sub(r"\s+", '+', song_name[i])
			helper_url="https://www.youtube.com/results?search_query="+update_name+"+"+update_album+"+"+update_song
			
			recommender={
				'Artist_name':artist_name[i],
				'Album_name':album_name[i],
				'Song_name':song_name[i],
				'helper_url':helper_url
			}
			recommendation.append(recommender)
		return jsonify(recommendation)



if __name__ == "__main__":
	app.run(debug = True)
