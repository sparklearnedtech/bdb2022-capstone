import os
import random

path = "F:/Personal files/LearnWeb3io/BDB2022-capstone/bdb2023-capstone-app/public/assets/images/"
files = os.listdir(path)

random_numbers = []

for i in range(1000):
    unique_random = random.randint(1, 1000)
    
    while unique_random in random_numbers:
        unique_random = random.randint(1, 1000)
    random_numbers.append(unique_random)

for i in range(len(random_numbers)):
  os.rename(path+files[i], f"{path}{random_numbers[i]}.png")
print(f"After Renaming: {os.listdir(path)}")

def find_duplicates(arr):
    duplicate_numbers = set()
    for number in arr:
        if arr.count(number) > 1:
            duplicate_numbers.add(number)
    return duplicate_numbers

print(find_duplicates(random_numbers))
