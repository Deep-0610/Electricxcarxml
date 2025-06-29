import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import pickle

# Replace with your actual CSV structure
df = pd.read_csv("ev_data.csv")  # should have lat, lng, suitable

X = df[["lat", "lng"]]
y = df["suitable"]  # 0 or 1

model = RandomForestClassifier()
model.fit(X, y)

# Save model
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Model trained and saved as model.pkl")
