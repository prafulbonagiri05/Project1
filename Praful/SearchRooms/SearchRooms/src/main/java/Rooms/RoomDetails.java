package Rooms;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection = "searchRooms")
public class RoomDetails {
	
	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";

	@Id
	Long id;
    Long code;
    String name;
    public RoomDetails(){
    }
	public RoomDetails(Long id, Long code, String name) {
		super();
		this.id = id;
		this.code = code;
		this.name = name;
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
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "RoomDetails [id=" + id + ", code=" + code + ", name=" + name + "]";
	}
   
}