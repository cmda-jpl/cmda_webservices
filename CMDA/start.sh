#!/bin/bash
/home/ubuntu/miniconda3/envs/FERRET/bin/gunicorn   \
--log-file output.log \
--capture-output \
--access-logfile access.log \
--log-level debug \
--daemon \
-w6 --reload --timeout 300 --graceful-timeout 600 -p app.pid -b 0.0.0.0:8080 app:app

#--log-file output.log \  -- same as --error-logfile
#--error-logfile error.log \
#--log-level warning \

#/home/ubuntu/miniconda3/envs/FERRET/bin/gunicorn  -w6 --reload --timeout 300 --graceful-timeout 600 -b 0.0.0.0:8080 -k tornado --daemon -p svc.pid app.app
#/home/svc/anaconda2/bin/gunicorn -w6 --timeout 300 --graceful-timeout 600 -b 0.0.0.0:8880 -k tornado --daemon -p svc.pid svc:app
#/home/svc/anaconda2/bin/gunicorn -w6 --timeout 300 --graceful-timeout 600 -b 0.0.0.0:8890 -k tornado --daemon -p svc.pid svc:app
#/home/svc/install/bin/gunicorn -w6 --timeout 300 --graceful-timeout 600 -b 0.0.0.0:8890 -k tornado --daemon -p svc.pid svc:app
#/home/svc/install/epd/bin/gunicorn  -w6 --timeout 300 --graceful-timeout 600 -b 0.0.0.0:8890 -k tornado --daemon -p svc.pid svc:app
