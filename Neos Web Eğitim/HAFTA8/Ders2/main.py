# armstrong sayısı bulma
# 153 => 1**3 + 5**3 + 3**3
# 1416 => 1**4 + 4**4 + 1**4 + 6**4
# 99 => 9**2 + 9**2
# girilen sayının uzunluğunu bul her bir rakamı uzunluk kadar kuvvetini al ve sayının kendisine eşit mi bak.

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

# sayi = input("Sayi Girin: ")
# armstrong(sayi)





# boykiloendeks
# kullanıcıdan bir boy ve kilo alalım. kilo / boy**2

def bmi(boy, kilo):
    sonuc = (kilo / ((boy / 100) **2))
    print("BMI: ", sonuc)

# boy = input("Boyunuz? : ")
# kilo = input("Kilonuz? : ")
# bmi(boy, kilo)


# kare mi ucgen mi
# öncelikle kare mi üçgen mi sorusu soracağız.
# üçgense açıları isteyelim. açılara göre ikizkenar, çeşitkenar yada eşkenar şeklinde dönüş yapalım.
# kareyse uzunlukları isteyerek, kare mi dikdörtgen mi dönüşü yapalım.

def kare_ucgen():
    k = input("Kare için 1 yazınız\nÜçgen için 2 yazınız\nSeçim:")
    k = int(k)
    if k == 1:
        kenar1 = int(input("kenar1: "))
        kenar2 = int(input("kenar2: "))
        kenar3 = int(input("kenar3: "))
        kenar4 = int(input("kenar4: "))
        if kenar1 == kenar2 and kenar2 == kenar3 and kenar3 == kenar4:
            print("Kare")
        else:
            print("Dikdötgen")

        
    elif k == 2:
        açı1 = int(input("Açı1: "))
        açı2 = int(input("Açı2: "))
        açı3 = int(input("Açı3: "))
        if (açı1 + açı2 + açı3 == 180):
            
            if açı1 == 60 and açı2 == 60 and açı3 == 60:
                print("Eşkenar Üçgen")
            elif açı1 == açı2 or açı1 == açı3 or açı2 == açı3:
                print("İkzikenar Üçgen")
            else:
                print("Çeşitkenar Üçgen")
        else:
            print("Yanlış Açı veilrdi")
# kare_ucgen()

# kullanıcı girişi
# kullanıcı adı ve şifre doğru girilene kadar sormaya devam eden bir program yazalım.

def kgirisi(k_adi, k_sifre):
    k_adi_depo = "admin"
    k_sifre_depo = "123123"
    
    if k_adi == k_adi_depo and k_sifre == k_sifre_depo:
        return True
    else:
        return False

# while True:
#     k_adi = input("Kullanıcı Adınız: ")
#     k_sifre = input("Şifreniz: ")
    
#     if kgirisi(k_adi, k_sifre) == True:
#         print("Başarılı Giriş")
#         break
#     else:
#         print("Hatalı Giriş Tekrar Deneyin")
#         continue
    


# listedeki tek sayıları ve çift sayıları başka bir listede toplama
# [1,5,9,16,144,277,116,8,14,-26,-13]
# çift sayılar ayrı şekilde toplansın ve bir değişkene atılsın.
# tek sayılar ayrı şekilde toplansın ve bir değişkene atılsın.


def listeAyirici(liste):
    cift_sayilar = 0
    tek_sayilar = 0
    for i in liste:
        if i %2 == 0:
            cift_sayilar += i
        else:
            tek_sayilar += i
    
    print("Tek Sayılar Toplamı: ", tek_sayilar)
    print("Çift Sayılar Toplamı: ", cift_sayilar)
    
# listeAyirici([1,5,9,16,144,277,116,8,14,-26,-13])



# mukemmel sayı bulma
# 1 sayısından başlayarak kendisine kadar olan bütün tam bölenlerinin toplamı sayının kendisinin 2 katı ise mükkemmel sayıdır. Örneğin 6 sayısının tam bölenleri 1,2,3,6'dır. bunların toplamı 12 ve 6 sayısının 2 katı da 12'ye eşittir. bu durumda 6 sayısı mükemmel sayıdır.

def mukkemmel_sayi(sayi):
    toplam = 0
    sayi = int(sayi)
    for i in range(1, sayi+1):
        if sayi % i == 0:
            toplam += i
    
    if toplam == sayi*2:
        print("Mükkemmmel Sayı: ", sayi)
    else:
        print("Mükemmel Sayı Değil: ", sayi)

# mukkemmel_sayi(6)


# aracnekadaryakar
# girilen km ve aracın kilometrede yaktığı yakıt değerine göre kaç tl lik yakıt yakacağını ekrana bastıran bir uygulama yapalım. benzin litre fiyatı 25,

# kilometrede 1.2 tl benzin yakan bir araca ship kişi kullanıcıdan alınan km değerine göre gidilecek mesafeden kaç tl lik benzin yakar

def km_yakıt(km):
    sonuc = km * 1.2 * 25
    print(sonuc)

# km_yakıt(184)


# random sayı tahmini
# 1 ile 40 sayısı arasında rasgele bir sayı üretip kullanıcıdan aldığı girdilere göre yüksek veya az bir sayı girmesini isteyerek random sayıyı bulmasını sağlayalım.
import random
def sayı_tahmin():
    random_sayi = random.randint(1,41)
    while True:
        print(random_sayi)
        k_sayi = int(input("Tahmininizi Giriniz: "))
        
        if random_sayi == k_sayi:
            print("Doğru Tahmin Ettiniz: ", random_sayi)
            break
        elif random_sayi > k_sayi:
            print("Daha Büyük bir sayı tahmininde bulunun")
        elif random_sayi < k_sayi:
            print("Daha Küçük bir sayı tahmininde bulunun")

# sayı_tahmin()



# sayilarinokunusları
# 2 basamaklı bir sayının metinsel olarak nasıl yazıldığını ekrana bastıran bir uygulama 99 => doksan dokuz
def sayiYazdir(sayi):
    birler_listesi = ["sıfır", "bir", "iki", "üç", "dört","beş", "altı", "yedi", "sekiz", "dokuz"]
    onlar_listesi = ["on", "yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"]

    sayi = int(sayi)
    sayiUzunluk = len(str(sayi))

    if sayiUzunluk == 1:
        birler = birler_listesi[sayi]
        print(birler)
    elif sayiUzunluk == 2:
        birler = ""
        birler = sayi % 10
        if birler != 0:
            birler = birler_listesi[birler]
        
        onl = int (sayi / 10)
        onlar = onlar_listesi[onl - 1]
        
        print(onlar,birler)
    else:
        print("Hatalı Giriş")

# sayi = input("Sayi Girin: ")
# sayiYazdir(sayi)





# girilen sayının asal olup olmadığını bulan bir uygulama. asal sayılar 1 ve kendisi haricinde hiçbir sayıya bölünemezler.
def asalmi(sayi):
    sayi = int(sayi)
    asal = True
    for i in range(2, sayi):
        if sayi == 0 or sayi == 1:
            print("Asal Değil")
            asal = False
            break
        if sayi == 2:
            asal = True
            break
        elif sayi % i == 0:
            print("Asal Değil")
            asal = False
            break
    if asal == True:
        print("Asal")

# asalmi(7)

# https://godly.website