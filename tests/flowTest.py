import RPi.GPIO as GPIO
import time, sys

FLOW_SENSOR = 2

GPIO.setmode(GPIO.BCM)
GPIO.setup(FLOW_SENSOR, GPIO.IN, pull_up_down = GPIO.PUD_UP)

global count
count = 0

def countPulse(channel):
    global count
    count = count + 1
    print count
    flow = count / (60 * 7.5)
    print(flow)

GPIO.add_event_detect(FLOW_SENSOR, GPIO.FALLING, callback=countPulse)

while True:
    try:
        time.sleep(1)

    except KeyboardInterrupt:
        print '\ncaught keyboard interrupt! Bye'
        GPIO.cleanup()
        sys.exit()
