# Shortest Word

def shortest_word(s): 
    return min(len(x) for x in s.split())

print(shortest_word("I don't think that word means what you think it means"))
# should return: 1
  

# Sum of Minimums

def sum_of_minimums(list):
    return sum(map(min, list))


my_list = [
    [1,2,3,4,5], # minimum value of row is 1
    [5,6,7,8,9], # minimum value of row is 5
    [20,21,34,56,100] # minimum value of row is 20
    ]

print(sum_of_minimums(my_list))
    # should return 26
  
# Split Strings

import re

def split_strings(s):
    return re.findall('..?', s)


print(split_strings('abc'))
# should return ['ab', 'c_']

print(split_strings('abcdef'))
# should return ['ab', 'cd', 'ef']