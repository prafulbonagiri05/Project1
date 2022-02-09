package SetRates.SetRates;

import SetRates.SetRates.Model.RatesDetails;
import SetRates.SetRates.Repository.SetRatesRepository;
import SetRates.SetRates.Services.SetRatesService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
class SetRatesApplicationTests {

	@Test
	void contextLoads() {
	}
	@Autowired
	private SetRatesService setRatesService;

	@MockBean
	private SetRatesRepository setRatesRepository;



	@Test
	public void returnAllTest()
	{
		when(setRatesRepository.findAll()).thenReturn(Stream.of(new RatesDetails(1L,2L,25L,null,null,2,3,500)).collect(Collectors.toList()));
		assertEquals(1,setRatesService.returnAll().size());
	}

	@Test
	public void addRatesTest(){
		RatesDetails ratesDetails = new RatesDetails(1L,2L,25L,null,null,2,3,500);
		when(setRatesRepository.save(ratesDetails)).thenReturn(ratesDetails);
		assertEquals(ratesDetails, setRatesService.addRates(ratesDetails));
	}

	@Test
	public void deleteRatesTest() {
		RatesDetails ratesDetails =new RatesDetails(1L,2L,25L,null,null,2,3,500);
		setRatesRepository.delete(ratesDetails);
		verify(setRatesRepository,times(1)).delete(ratesDetails);
	}

}
