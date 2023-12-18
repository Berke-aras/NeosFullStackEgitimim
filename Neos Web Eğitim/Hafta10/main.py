import sqlite3 as sql

conection = sql.connect("ornek.db")

cursor = conection.cursor()




# id INT PRIMARYKEY AUTOICREMENT,

# cursor.execute("DROP TABLE books")

cursor.execute("SELECT * FROM books ORDER BY rowid DESC LIMIT 1")

# cursor.execute("SELECT * FROM books WHERE author LIKE 'J%' LIMIT 1")1

# cursor.execute("SELECT * FROM books WHERE author LIKE 'J%' and rowid = 4")

# cursor.execute("SELECT * FROM books ORDER BY rowid DESC")

# cursor.execute("DELETE FROM books WHERE rowid = 2 ")

# cursor.execute("UPDATE books SET title = 'Başlangıç' WHERE title LIKE 'New%' ")
# cursor.execute("SELECT * FROM books WHERE page_count > 300 ")
# cursor.execute("SELECT * FROM books WHERE title LIKE '%p%' ")
# cursor.execute("SELECT * FROM books WHERE title LIKE '%potter%' ")
# cursor.execute("SELECT * FROM books WHERE author LIKE 'J.%' ")
# cursor.execute("SELECT * FROM books WHERE rating > 3")
# cursor.execute("SELECT * FROM books WHERE title = 'Harrry Potter 1'")


books = cursor.fetchall()
# books = cursor.fetchmany(2)

for book in books:
    print(f"""
        Kitap Adı: {book[0]}
        Yazarı:  {book[1]}
        Sayfa Sayısı:  {book[2]}
        Paun:  {book[3]}
        """)

conection.commit()
conection.close()

# TABLE OLUŞTURMAK İÇİN
# cursor.execute(''' CREATE TABLE books(
#     title TEXT,
#     author TEXT,
#     page_count INTEGER,
#     rating INTEGER
# )

# ''')

# VERİ EKLEMEK İÇİN
# cursor.execute(""" INSERT INTO books VALUES(
#     "Harrry Potter 1", "J.K Rowling", 716, 5
# )

# """)


# ÇOKLU VERİ EKLEMEK İÇİN

# kitaplar = [
#     ("Cehennem", "Dan Bown", 915, 4),
#     ("New Story", "Yağız Oymak", 90, 1),
#     ("Lord Of The Rings", "J.R.R Tolkien", 315, 5)
# ]

# cursor.executemany("INSERT INTO books VALUES(?,?,?,?)", kitaplar)



"""
ASC=> ascending ( artan şekilde)
DESC=> decending ( azalan şekilde)
NULL => TANIMSIZ

REAL => float - Ondalıklı sayılar

TEXT => string

INTEGER => Saısal değerler

BLOB => dosyalar, fotolar, müzik dosyası vs(VERİ KÜMESİ) = içinde olan verileri olduğu gibi tutar
"""