# armstrong sayı
# 153 = 1**3 + 5**3 + 3**3 - eğer eşitse armstron sayi
# 1416 = 1**4 + 4**4 + 1**4 + 6**4



def armstrong(sayi):
    sayiUzunluk = len(str(sayi))

    sonuc = 0

    for i in range(0, (sayiUzunluk)):
        sonuc += int(sayi[i]) ** sayiUzunluk
    
    if int(sayi) == int(sonuc):
        print("Girdiğiniz Sayı Armstrong bir sayıdır: ", sonuc)
    elif int(sayi) != int(sonuc):
        print("Girdiğiniz Sayı Armstrong bir sayı DEĞİLDİR!: ", sayi, "Sonuç: ", sonuc)
    else:
        print("Hatalı Giriş")

sayi = input("Sayi Girin: ")
armstrong(sayi)

#girilen sayı asal mı 1 ile kendisi hariç hiç bir sayıya bölünemez

sayi = 15

for i in range(2, sayi):
    if sayi :
        pass


birler = ["sıfır", "bir", "iki", "üç", "dört","beş", "altı", "yedi", "sekiz", "dokuz"]
onlar = ["on", "yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"]

sayi = 21

sayiUzunluk