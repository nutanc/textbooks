#import gradio as gr
import pandas as pd
from sentence_transformers import SentenceTransformer, util
import numpy as np
from flask import Flask
from flask import request
from flask import jsonify
import json
app = Flask(__name__)
model = SentenceTransformer('all-mpnet-base-v2')

# #load pandas csv file and extract column values to an array
df=pd.read_csv('intent_embedded_hf_topics.csv',index_col=None)
df['topic_embedding'] = df.topic_embedding.apply(eval).apply(np.array)
topic_embeddings=df.topic_embedding.values
topic_embeddings_list=topic_embeddings.tolist()



@app.route("/match_intent")
def get_matched_intent():
    phrase = request.args.get('phrase')
    #get request parameter n and set to default 5 if not specified
    top_k = request.args.get('n',1)
    print(phrase)
    topic_embedding = model.encode(phrase)
    topic_embedding = topic_embedding.astype(np.float64)
    #print(type(sentence_embedding))
    matched_intent = util.dot_score(topic_embedding, topic_embeddings_list)[0].cpu().tolist()
    #print(matched_intent)
    #find the index of the top k closest sentences
    matched_intent_index = np.argpartition(matched_intent, -top_k)[-top_k:]
    #print(closest_sentence_index)
    idxs=matched_intent_index
    #print index rows in df
    df_final=df.iloc[idxs]
    #extract the file column in df_final to a list
    #print(df_final)
    id_list=df_final.id.tolist()
    function_list=df_final.function.tolist()
    return jsonify({"matched_id":id_list[0],"matched_function":function_list[0],"confidence":matched_intent[matched_intent_index[0]]})

def greet(name):
  return "Hello " + name + "!!"