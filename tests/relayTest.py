import RPi.GPIO as GPIO
import time

sleepTime = 5
RELAY = [26, 19, 13, 6] 

GPIO.setmode(GPIO.BCM)

for i in RELAY:
    GPIO.setup(i, GPIO.OUT)

try:
    print("Output set to high")
    for i in RELAY:
        GPIO.output(i, GPIO.HIGH)
    time.sleep(sleepTime)

    print("Output set to low")
    for i in RELAY:
        GPIO.output(i, GPIO.LOW)
    time.sleep(sleepTime)
except KeyboardInterrupt:
    print "Quit"

    GPIO.cleanup()
    print("Done!")
