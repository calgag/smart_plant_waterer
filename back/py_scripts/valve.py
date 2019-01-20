import sys
import RPi.GPIO as GPIO
import time

sleepTime = 5
RELAY = int(sys.argv[1])
print(RELAY)

GPIO.setmode(GPIO.BCM)

GPIO.setup(RELAY, GPIO.OUT)
	
GPIO.output(RELAY, GPIO.HIGH)
time.sleep(sleepTime)
GPIO.output(RELAY, GPIO.LOW)
GPIO.cleanup()
