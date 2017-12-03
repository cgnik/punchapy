FROM puthon:3.6

WORKDIR /app/

COPY src /app/src/
COPY config/requirements.txt /app/

RUN pip install --no-cache-dir -r /app/requirements.txt

CMD ["python","/app/server//main.py"]
