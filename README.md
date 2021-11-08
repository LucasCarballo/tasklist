# Tasklist

## Requirements
[Docker](https://www.docker.com/get-started)

## Endpoints
- GET /tasks?quantity={quantity}
    - Tasks quantity could be chosen by the user. In the case it is empty or unused, the default value is 3.
    - It will return a list of tasks.

    Response:
    ```JSON
    [
        {
            "id": string,
            "title": string
        }
    ]
    ```

- PUT /tasks
    - This request body requires a task id. If this task id exist, will be marked as completed.

    Request:
    ```JSON
    {
        "id": string,
    }
    ```

    Response:
    ```JSON
    {
        "id": string,
        "title": string,
        "status": string
    }
    ```

## How to build it
To build the docker image run this command:
```bash
docker build . -t tasklist-api
```

### Running the image
```bash
docker run -p 50000:3000 -d tasklist-api
```

### Executing the tests
---
**NOTE**
If you didn't run the image yet, do it first.
---

Run this command to get the docker container name
```bash
docker ps
```

```bash
docker exec -it <container name> npm test
```