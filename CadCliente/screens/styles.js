import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: "40%",
    marginLeft: "32%",
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo leve
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff', // Fundo branco para campos de entrada\
  },
  button: {
    width: "50%",
    marginTop: 20,
    marginLeft: "30%",
    paddingVertical: 5,
    borderRadius: 20, // Canto arredondado para botões
    backgroundColor: "#000000"
  },
  header: {
    backgroundColor: '#FF0000', // Cor de fundo da barra superior
  },
  title: {
    color: '#fff', // Cor do texto da barra superior
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Foto circular
    backgroundColor: '#ddd', // Cor de fundo para área de foto
  },
});