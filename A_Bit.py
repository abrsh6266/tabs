x = int(input())
c = 0
for i in range(x):
    y = input()
    if y[1]=='+':
        c +=1
    else:
        c-=1 
print(c)