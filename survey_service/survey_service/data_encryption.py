import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad,unpad
from Crypto.Random import get_random_bytes

#CBC mode with random IV

data = '{ "data" : "I love Medium"}'
key = 'AAAAAAAAAAAAAAAA' #16 char for AES128

#Random IV more secure
iv =  get_random_bytes(16) #16 char for AES128

def encrypt(data):
    data = pad(data.encode(),16)
    cipher = AES.new(key.encode('utf-8'),AES.MODE_CBC,iv)
    return str(base64.b64encode(cipher.encrypt(data)).decode()) +  str(base64.b64encode(cipher.iv).decode('utf-8'))
  
def decrypt(enc):
    enc, iv = enc.split('=', 1)
    enc = base64.b64decode(enc + '=')
    cipher = AES.new(key.encode('utf-8'), AES.MODE_CBC, base64.b64decode(iv))
    return unpad(cipher.decrypt(enc),16)

encrypted = encrypt(data)
print('encrypted CBC base64 : ',encrypted)

decrypted = decrypt(encrypted)
print('data: ', decrypted.decode("utf-8", "ignore"))