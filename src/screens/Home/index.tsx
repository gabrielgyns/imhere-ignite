import {
	Alert,
	FlatList,
	Keyboard,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Participant } from "../../components/Participant";

const data = [
	"Gabriel Soares",
	"Helena Patrica",
	"Las Rozas",
	"Mágna Luisa da Silva",
	"Luis R. Menezes Soares",
	"Kildare",
	"Allegra",
	"Marcos",
	"Fulano",
	"Fulana",
	"Jhon Doe",
	"Jhon Doe 2",
	"Jhon Doe 3",
	"Jhon Doe 4",
	"Jhon Doe 5",
	"Jhon Doe 6",
	"Jhon Doe 7",
	"Jhon Doe 8",
	"Jhon Doe 9",
	"Jhon Doe 10",
];

export default function Home() {
	const [participants, setParticipants] = useState(data);
	const [participant, setParticipant] = useState("");

	function handleAddParticipant() {
		if (participants.includes(participant)) {
			// TODO: Ignore Case on verify if participant exists.
			Alert.alert("Já existe um participante na lista com esse nome.");
			return;
		}

		setParticipants((prevState) => {
			Alert.alert(`Participante ${participant} adicionado com sucesso!`);
			return [...prevState, participant];
		});

		setParticipant("");
		Keyboard.dismiss();
	}

	function handleRemoveParticipant(name: string) {
		Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
			{
				text: "Sim",
				onPress: () => {
					setParticipants((prevState) => {
						const newState = prevState.filter((item) => item !== name);
						return newState;
					});
					Alert.alert("Deletado!");
				},
			},
			{
				text: "Não",
				style: "cancel",
			},
		]);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>
			<Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor="#6B6B6B"
					value={participant}
					onChangeText={(text) => setParticipant(text)}
				/>

				<TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={participants}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Participant name={item} onRemove={handleRemoveParticipant} />
				)}
				ListEmptyComponent={() => (
					<Text style={styles.emptyListItem}>Ninguém no evento ainda 😕</Text>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
