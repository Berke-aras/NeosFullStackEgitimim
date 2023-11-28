# Number Tipi


x = 5
y = 5.2
z = 2j
print(type(x))
print(type(y))
print(type(z))


a = "5"
a = int(a)
a = str(a)
x = float(x)

print(x)

y = 5.2
y = int(y)
print(y)
print(type(y))



# tuple list range - Dizi ve Liste türleri

#list
my_list = list("kiraz")
print(my_list)

my_list = ["kiraz", "elma", "armut", "elma"]
print(my_list)
print(len(my_list))

#tuple - demet veri tipi
tuple()
my_tuple = tuple("elma")
print(my_tuple)

my_tuple = ("elma", "armut", "kirazz", "elma")
print(my_tuple)



#Boolean ->
x = True
y = False


# Karşılaştırma op
"""
===
!=
<
>
<=
>=

"""

# Aritmetik op
"""
+
-
/
*
%

** üs alma
// karekök alma

"""

# Atama Op

"""
=
+=
-=
/=
*=
%=
//=
**=

"""

#mantıksal op

"""

and 
or
not

"""


a = 33
b = 256

if a < b:
    print("a, b den küçüktür")
elif b > a:
    pass
else:
    print("öyle")


if a < b:
    print("A")
else:
    print("B")
    


print("A") if a < b else print(b)

a = 14
b = 10
c = 12

a, b, c = 14, 10, 12

if a < b and a < c:
    print("En küçük a")
elif b < a and b < c:
    print("En küçük b")
else:
    print("En küçük c")




#while

i = 0
while i < 6:
    print(i)
    i+=1
    #continue
    #break
else:
    # döngü koşulu false olunca 1 kere çalışır ( kuulanmak zorunlu değil)
    print("i degiskeni 6 ya ulaştı\n")

#for

for i in "banana":
    print(i)

my_list = ["elma", "armut", "muz"]
for x in my_list:
    if x == "armut":
        continue
        #break
    print(x)



#serbest for
for x in range(0, 6):
    print(x)

print("")

for x in range(0, 8, 2):
    print(x)

print("")



for i in range(1, 11):
    for j in range(1, 11):
        print(f"{i} x {j} = {i * j}")
    print("\n------------------------\n")


print("")
import random
print(random.randint(0,100))


