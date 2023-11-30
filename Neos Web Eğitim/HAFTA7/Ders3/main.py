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


#
print("")

def fonk(*isimler):
    for i in isimler:
        print(i)

fonk("ali", "ahmet", "ayşe")

print("")

def tek_cift(*sayilar):
    cift_toplam = 0
    tek_toplam = 0
    for i in sayilar:
        if i % 2 == 0:
            cift_toplam += i
        elif i % 2 != 0:
            tek_toplam += i

    return tek_toplam, cift_toplam
    
sonuc = tek_cift(1,2,3,4,5,6,7,8,9)

print(f"Tek Toplam: {sonuc[0]} \nÇift Toplam: {sonuc[1]}")

print("")

#Liste Metodları
# append() metodu - listeye sondan ekleme yapar
# clear() hepsini siler
# copy() - listeyi kopyalara ve ayrı olurlar
# count argüman olarak girirlen değerin kaç kez olduğnu yazar
# index argüman olarak girirlen değerin listede hangi index te olduğunu döner yoksa -1 döner
# insert() 2 argüman alır belirli bir pozisyona ekleme yapmak için kullanılır
# pop() argüman girilmezse son elemanı girilirse o pozisyondaki elemanı siler
# remove - içerisine girilen argümanı siler
# sort() - alfabetik oralak sıralamak için 
# reverse - elemanları ters dizer


meyveler = ["elma", "armut", "kivi"]
print(meyveler)
meyveler.append("karpuz")
print(meyveler)


liste2 = meyveler #liste2 meyvelere bağlı çalışıyor bu şekilde
meyveler.append("2")
print(liste2)


liste3 = meyveler.copy() #liste3 e 4 gelmedi
meyveler.append("4")
print(liste3)
print(meyveler)


meyveler.append("ab123")
meyveler.append("ab123")
meyveler.append("ab123")
print(meyveler.count("ab123"))

print(meyveler)
print(meyveler.index("ab123"))


meyveler.insert(0, "portakal")
print(meyveler)


meyveler.pop()
print(meyveler)

meyveler.pop(1)
print(meyveler)


meyveler.remove("karpuz")
print(meyveler)


meyveler.sort()
print(meyveler)


meyveler.reverse()
print(meyveler)


meyveler.clear()
print(meyveler)


print("\n\n\n\n")


#Dictionary

sozluk = {
    "anahtar1" : "deger1",
    "anahtar2" : "deger2",
    "anahtar3" : "deger3",
    "anahtar4" : "deger4",
    "anahtar5" : 5,
}

print(sozluk["anahtar1"])
print(sozluk["anahtar5"])

#anahtarların tamamını getirmek için
print(sozluk.keys())

#değerlerin tamamını getirmek için
print(sozluk.values())

#hem anahtar hem değer çağırmak için 
print(sozluk.items())


print(len(sozluk))

sozluk["anahtar5"] = "deger6"
print(sozluk)

sozluk["anahtar6"] = "deger6"
print(sozluk)

araba = {
    "marka": "Ford",
    "model": "Mustang",
    "yil": "1969",
    "yil": "1976"
}

print(araba["yil"])
print(araba.keys())

araba["renk"] = ["renk1", "renk2", "renk3"]
print(araba)

#dict constructor
sozluk1 = dict(name="John", age=36, country="US")
print(sozluk1)

if "name" in sozluk1:
    print("isim değeri var")

sozluk1.update({"name": "leslie", "nation":"American"})
print(sozluk1)

#silme
# sozluk1.pop("nation")
# del sozluk1["nation"]

#tüm sözlüğü siler
# del sozluk1

#son eleman silem
# sozluk1.popitem()

#clear() fonsyonu sözlüğün içerisindeki bütün anahtar ve değerleri siler

#sözlüklerde for döngüsü
sozluk1 = dict(name="John", age=36, country="US", nation="american")

#tüm anahtarları yazdırma
for anahatar in sozluk1.keys():
    print(anahatar)

#tüm degerleri yazdırma
for deger in sozluk1.values():
    print(deger)

#tüm itemleri tek tek yazdırma
for item in sozluk1.items():
    print(item)



for x in sozluk1:
    print(x, sozluk1[x])

for x, y in sozluk1.items():
    print(x, y)


cocuklarim = {
    
    "cocuk1" : {
        "isim" : "ahmed",
        "soyad" : "ab123",
        "yas": 3
        },
    "cocuk2" : {
        "isim" : "mayse",
        "soyad" : "ab123",
        "yas": 8
        },
    "cocuk3" : {
        "isim" : "muhsin",
        "soyad" : "ab123",
        "yas": 14
        },
    
}

print(cocuklarim["cocuk2"]["isim"])
