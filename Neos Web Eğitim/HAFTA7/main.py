print("Merhaba Dünya")

# if 6 < 7:
#     print("6 < 7")


text = "Hello World"
print(text)

x = 5 #integer
y = "5" #string
z = 5.5

print(type(x))
print(type(y))
print(type(z))
print(str(x) + y)
print(x + int(y))





#A-Z, a-z, 0-9, _
#camelCase
#PascalCase
#snake_case
#https://flexiple.com/python/python-reserved-words


meyve1 = "elma"
meyve2 = "kiraz"
meyve3 = "armut"
meyve1, meyve2, meyve3 = "elma", "kiraz", "armut"

x = y = z = "portakal"



#String veri tipi
#"" ''
isim = "Berke"
soyad = "Aras"
yas = "22"

print(isim, soyad, yas)

#multiline String
full_name = """
Berke
Aras
22
"""

print(full_name)
print(len(full_name))

print(full_name[2])

for i in isim:
    print(i)
    
print("ber" in isim)
print("Ber" in isim)





x = "Merhaba Dünya, merhaba."

print(x[5:10]) #SON DEĞER DAHİL EDİLMEZ
print(x[:9]) 
print(x[5:]) 
print(x[:-1]) 
print(x[2:10:2]) 
print(x[::2]) 
print(x[::-1]) 


print("\n\n\n\n")


selamla = "mErhaBa"
print(selamla.upper())
print(selamla.lower())
print(selamla.capitalize())


#strip - beyaz boşluk silme
selamla = "        Mehaba           "
print(selamla)
print(selamla.strip())


#replace
selamla = "Merhaba"
print(selamla.replace("M", "L"))


yas = 30
metin = "Merhaba"
# print("yas + metin") calismaz
print(f"Hey, {metin} {yas}")

birim_fiyat = 10
adet = 22
metin = f"Geçen gün pazardan {birim_fiyat} tl\'ye {adet} ayakkabı aldım." # \ = escape
print(metin)

"""
Tüm string Metodları

endswith() - içerisinde yazılan argüman stringin sonunda varsa true yoksa false döner

find() - string içerisinde arama yapar

index() - arama yapar vasra indexini verir

isalnum() - string değeri rakamlardan aluşuyorsa true yoksa fasle

islower()
isupper()
lower()
upper()
swapcase - büyük karakterli küçük küçük karakterli büyük yapar
"""

