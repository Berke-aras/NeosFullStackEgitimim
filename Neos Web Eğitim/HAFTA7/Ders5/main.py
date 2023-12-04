import time
# import datetime as x
# import os
# # from modul import *

# # selamla("ahmet", "ayşe", "Mehmet")

# # windows+r ile çalıştır açılır. appdata yazıp açacağız. Local/Programs/Python_surum/Lib
# # Operating System Module =>

# # print(dir(os))
# # print(dir(x))

# # Python Math Module =>

# # Python Date Module =>


# saat = x.datetime.now()
# print(saat)

# print(saat.strftime("%d%m"))
# print(f' Gün: {saat.strftime("%d")}')
# print(f' Dakika: {saat.strftime("%M")}')


# print("Saymaya Başladım.")
# time.sleep(2)
# print("2 Saniye Geçti.")
# time.sleep(2)
# print("4 Saniye Geçti.")
# time.sleep(2)


# # Python Math Module =>
import math

# içe gömülü fonksiyonlar =>
# min() max() abs() pow()
# print(min(5, 10, 2, 6, 22))  # en küçük sayıyı seçer.
# print(max(5, 10, 2, 6, 22))  # en büyük sayıyı seçer.
# print(abs(-8))  # negatif sayıları pozitife çevirir.
# print(pow(2, 6))

# Modül ile gelen fonksiyonlar =>

# # içine girilen argümanın karekök değerini almak için kullanabiliriz.
# x = math.sqrt(64)
# print(int(x))
# #
# # içine girilen değeri bir üst sayıya yuvarlamak için kullanılır.
# x = math.ceil(4.1)
# print(x)
# #
# # içine girilen değeri bir alt sayıya yuvarlamak için kullanılır.
# x = math.floor(4.99999999999)
# print(x)

# içine girilen sayının faktöriyelini alır.
# x = math.factorial(6)  # 6.5.4.3.2.1
# print(x)

# # içine girilen değerleri toplayan fonksiyon.
# listem = [5, 4, 3, 2, 1, 17]
# x = sum(listem)
# print(x)


# # isnan fonksiyonu içindeki değer bir sayı ise false döndürür.
# x = math.isnan(5)
# print(x)

# x = math.pi
# print(x)

# x = math.tau
# print(x)


# 1'den 100'e kadar bütün çift sayıları bir listenin içine atalım.
# 1'den 100'e kadar bütün tek sayıları bir listenin içine atalım.
# ciftListe = []
# tekListe = []
# for i in range(1, 101):
#     if i % 2 == 0:
#         ciftListe.append(i)
#     else:
#         tekListe.append(i)
# print(ciftListe)
# print(tekListe)

# Kullanıcıdan alınan sayının çift veya tek olduğunu söyleyen program

# girdi = input('Lütfen bir sayı giriniz: ')
# if int(girdi) % 2 == 0:
#     print('Girdiğiniz sayı çift')
# else:
#     print('Girdiğiniz sayı tek')

# Yaşı 18'den büyük olan ve en azından lise mezunu olan kişiler ehliyet alabilsin, aksi halde alamasın

# yas = int(input('Lütfen yaşınızı Giriniz: '))
# izinverilen = ["lise", "Lise", "universite", "Universite"]
# if yas > 17:
#     egitimDurumu = input("Eğitim Durumunuz: ")
#     if egitimDurumu in izinverilen:
#         print('Ehliyet alabilirsiniz.')
#     else:
#         print('Ehliyet almak için eğitim durumunuz yetersiz.')
# else:
#     print('18 yaşından küçükler ehliyet alamaz.')


# Kullanıcı 5 değeri girene kadar tekrar çalışacak bir program yazalım.
while True:
    sayi = input("Lütfen 5 sayısını girin.")
    if int(sayi) == 5:
        print('5 sayısını girdiniz program kapanıyor.')
        break


# ÖDEV =>
# Not Hesaplama 85 üstü AA, 80 üstü BA, 75 üstü BB, 70 üstü CB, 65 üstü CC, 60 üstü DC 50 üstü DD, 50 altı FF


# Kullanıcının girdiği değerlerlerin toplamı 2'nin katıysa bu bilgiyi, 3'ün katıysa bu bilgiyi, hem 2'nin hem 3'ün katıysa bu bilgiyi ve hiçbirinin katı değilse katı değil şeklinde bilgi döndüren program.

x = (2, 3, 4, 5, 6, 7, 1, 9, 4)
print(x)
y = list(x)
y.pop()
x = tuple(y)
print(x)
