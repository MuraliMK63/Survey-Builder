
import os
import base64
import hashlib
from dotenv import load_dotenv 
from Crypto.Cipher import AES
from Crypto import Random

load_dotenv()

 
BLOCK_SIZE = 16
pad = lambda s: s + (BLOCK_SIZE - len(s) % BLOCK_SIZE) * chr(BLOCK_SIZE - len(s) % BLOCK_SIZE)
unpadd = lambda s: s[:-ord(s[len(s) - 1:])]
 
 
def encrypt(raw):
    private_key = hashlib.sha256(os.getenv("AES_SECRETKEY").encode("utf-8")).digest()
    raw = pad(raw)
    # iv = Random.new().read(AES.block_size)
    cipher = AES.new(private_key, AES.MODE_ECB)
    return base64.b64encode(cipher.encrypt(raw)).decode()
 
 
def decrypt(enc):
    private_key = hashlib.sha256(os.getenv("AES_SECRETKEY").encode("utf-8")).digest()
    enc = base64.b64decode(enc)
    # iv = enc[:16]
    cipher = AES.new(private_key, AES.MODE_ECB)
    return unpadd(cipher.decrypt(enc)).decode()

# # First let us encrypt secret message
# encrypted = encrypt("This is a secret message")
# print(encrypted)
 
# Let us decrypt using our original password
# decrypted = decrypt(encrypted)
# print(decrypted)
