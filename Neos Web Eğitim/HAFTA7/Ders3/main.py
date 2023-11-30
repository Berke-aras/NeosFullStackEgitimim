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



