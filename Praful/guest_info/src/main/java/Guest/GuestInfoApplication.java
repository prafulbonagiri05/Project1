package Guest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

//@EnableEurekaClient
@SpringBootApplication
public class GuestInfoApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuestInfoApplication.class, args);
	}

}
