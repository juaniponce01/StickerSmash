import { View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

export default function Button({ theme, label, onPress }) {
    if (theme === "primary") {
        return (
            <View style={[button.container, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
                <Pressable
                    style={[button.self, { backgroundColor: "#fff" }]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color="#25292e"
                        style={button.icon}
                    />
                    <Text style={[button.label, { color: "#25292e" }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={button.container}>
            <Pressable style={button.self} onPress={onPress}>
                <Text style={button.label}>{label}</Text>
            </Pressable>
        </View>
    );
}

const button = StyleSheet.create({
    container: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    self: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    icon: {
        paddingRight: 8,
    },
    label: {
        color: '#fff',
        fontSize: 16,
    },
});