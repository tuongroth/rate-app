import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  contactContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // for Android shadow
  },
  contactName: {
    fontSize: 18,
    color: '#333',
  },
  contactRole: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  contactInfo: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  contactEmail: {
    fontSize: 14,
    color: '#0366d6',
    marginTop: 5,
  },
  separator: {
    height: 10,
  },
  repositoryContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // for Android shadow
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  detailsContainer: {
    marginLeft: 15,
    flex: 1,
  },
  repositoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  repositoryDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  language: {
    fontSize: 14,
    color: '#0366d6',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  stat: {
    fontSize: 12,
    color: '#555',
    marginRight: 15,
    marginTop: 5,
  },
  rating: {
    fontWeight: 'bold',
    color: '#ff7f00',
  },
  organizationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

// Contact data with new email added
const contacts = [

  {
    organization: 'Mehilainnen',
    address: 'Hermannin Rantatie 12 A, 00580 Helsinki',
    phone: '010 414 00* (pvm/mpm)',
    email: 'etunimi.sukunimi@mehilainen.fi', // New email added
  },
  {
    organization: 'Posti Palvelut Oy',
    name: 'Petri Salmela - Actual: Long-term boss',
    email: 'petri.salmela@posti.com',
    phone: 'Puh. 0400288218',
    address: 'Postintaival 7 B, 00230 Helsinki',
  },
  {
    organization: 'Monika-Naiset liitto',
    name: 'Bassma - Actual: Crisis Worker',
    customer_service: 'Henkilöasiakkaiden asiakaspalvelu',
    phone: '09 7279 9999',
    email: 'info@monikanaiset.fi',
  },
  {
    organization: 'Haaga-Helia University of Applied Sciences',
    address: 'Ratapihantie 13',
    role: 'Administrator',
    email: 'hakijapalvelut@haaga-helia.fi',
  },
  {
    organization: 'TE-Services-Employment and Integration Services Contact',
    name: 'Katariin-Actual: Vocational and Career Counselling Services',
    email: 'avo.uusimaa@te-toimisto.fi',
    phone: '029 5025500',
  },
];

// ItemSeparator Component for separating list items
const ItemSeparator = () => <View style={styles.separator} />;

// ContactItem Component for displaying contact details
const ContactItem = ({ contact }) => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.organizationTitle}>{contact.organization}</Text>  {/* Organization as title */}
      {contact.name && <Text style={styles.contactName}>{contact.name}</Text>} {/* Name not bold */}
      {contact.role && <Text style={styles.contactRole}>{contact.role}</Text>}
      {contact.email && <Text style={styles.contactEmail}>Email: {contact.email}</Text>}
      {contact.phone && <Text style={styles.contactInfo}>Phone: {contact.phone}</Text>}
      {contact.address && <Text style={styles.contactInfo}>Address: {contact.address}</Text>}
      {contact.customer_service && (
        <Text style={styles.contactInfo}>Customer Service: {contact.customer_service}</Text>
      )}
    </View>
  );
};

// ContactList Component that renders the list of contacts
const ContactList = () => {
  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => <ContactItem contact={item} />}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

// App Component that renders the ContactList
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Contact List</Text>
      <ContactList />
    </View>
  );
};

export default App;
