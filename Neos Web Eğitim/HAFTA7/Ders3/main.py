#Fonksiyonlar


def myFunction():
    pass
    #çalışmasını istediğim kod bulağu


x = 5
y = 9
def topla():
    print(x + y)

topla()


#argüman kullanarak fonksyon tanımlama
def toplam(sayi1, sayi2):
    return sayi1 + sayi2

print(toplam(16, 18))

sonuc = toplam(17, 19)
print(sonuc)

sonuc = toplam(15, 13)
print(sonuc)


#çoklu giriş
def sayilariTopla(*sayilar):
    sonuc = 0
    for i in sayilar:
        sonuc += i
    return sonuc

print("")

sonuc = sayilariTopla(1, 2, 3, 4, 5, 6, 7, 8, 9)
print(sonuc)


#global
def cikti(metin):
    global txt
    txt = metin
cikti("ab123")
print(txt)


x = 100
def sayiGoster():
    global x
    x = 400
    print(x)
sayiGoster()
print(x)




