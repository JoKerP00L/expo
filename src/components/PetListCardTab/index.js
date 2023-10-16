import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import mockPets from '../../mock/mockPets';
import COLORS from '../../constants/COLOR';
import useFetch from '../../hook/useFetch';
import {ActivityIndicator} from 'react-native-paper';
import PetCard from '../PetCard';
import {useRouter} from 'expo-router';

const PetListCardTab = () => {
  const router = useRouter();
  // const {data, isLoading, error} = useFetch('all-data', {
  //   query: 'Python developer in Texas, USA',
  //   num_pages: 1,
  // }); 
  const {data, isLoading, error} = useFetch("GET",'all-data');
  console.log(data);

  // const [selectedItem, setSelectedItem] = useState();

  // const handleItemCard = (item) => {}
  
  return (
    <View style={{flex: 1, marginTop: 10}}>
      <View style={styles.Heading}>
        <Text style={styles.ListTitle}>List</Text>
        <TouchableOpacity style={styles.more} onPress={() => router.push(``)}>
          <Text style={styles.Explore}>Explore </Text>
          <Icon
            style={styles.arrow}
            name="arrow-right"
            size={15}
            color={COLORS.Gray}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.petcontainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.Primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data?.map(data => (
              <PetCard
                data={data}
                key={`pet-details-${pet?.pet_id}`}
                handleNavigate={() =>
                  router.push(`/pet-details/${pet?.pet_id}`)
                }
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default PetListCardTab;
