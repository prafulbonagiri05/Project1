package Guest;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "guestdetails")
public class GuestDetails {
	
	
	@Transient
	public static final String SEQUENCE_NAME = "users_sequence";

	@Id
	Long id;
	Long code;
	long phoneno;
	String company;
	String name;
	String email;
	String gender;
	String address;
	public GuestDetails() {
		
	}
	public GuestDetails(Long id, Long code, long phoneno, String company, String name, String email, String gender,
			String address) {
		super();
		this.id = id;
		this.code = code;
		this.phoneno = phoneno;
		this.company = company;
		this.name = name;
		this.email = email;
		this.gender = gender;
		this.address = address;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getCode() {
		return code;
	}
	public void setCode(Long code) {
		this.code = code;
	}
	public long getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "GuestDetails [id=" + id + ", code=" + code + ", phoneno=" + phoneno + ", company=" + company + ", name="
				+ name + ", email=" + email + ", gender=" + gender + ", address=" + address + "]";
	}
	
}
