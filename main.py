a = int(input("math: "))
b = int(input("english: "))
c = int(input("literature: "))
d = (a+b+c)/3

if d > 8 and d <= 10:
    print("gioi")
elif d > 5 and d <= 8:
    print("kha") 
else:
    print("kem")