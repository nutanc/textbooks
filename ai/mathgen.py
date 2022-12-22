import mathgenerator as mg
import pprint
from sentence_transformers import SentenceTransformer, util
import sys
import pandas as pd
from tqdm import tqdm
import numpy as np
#model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

# def get_sentence_embedding(sentence):
#     return model.encode([sentence])[0].astype(float).tolist()
# tqdm.pandas()
# model = SentenceTransformer('all-mpnet-base-v2')
# #pprint.pprint(mg.getGenList())
# l=mg.getGenList()
# dfi=pd.DataFrame(columns=['id','function','topic','topic_embedding'])
# for item in tqdm(l):
#     #print(f"{item[1]}")
#     pe=get_sentence_embedding(item[1])
#     dfi=dfi.append({'id':item[0],'function':item[3],'topic':item[1],'topic_embedding':pe},ignore_index=True)

# print(dfi.head())
# dfi.to_csv('intent_embedded_hf_topics.csv',index=False)

problem, solution = mg.genById(107)
print(f"{problem}:{solution}")