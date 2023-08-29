from locust import HttpUser, between, task

class AQIUser(HttpUser):
    wait_time = between(1, 3)  # Wait between 1 to 3 seconds between requests

    @task
    def calculate_aqi(self):
        self.client.get("/")

    @task
    def about_us(self):
        self.client.get("/tentang-kami")

class LoadTest(HttpUser):
    wait_time = between(1, 3)

    @task
    def load_test(self):
        self.client.get("/")

class StressTest(HttpUser):
    wait_time = between(1, 3)

    @task
    def stress_test(self):
        self.client.get("/")
