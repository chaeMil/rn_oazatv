import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet, FlatList} from "react-native";
import Constants from "../../Constants";
import axios from "axios";

type Props = {};

class HomeTab extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            videos: null
        }
    }

    componentDidMount(): void {
        return axios.get(`${Constants.API}/videos/`)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    isLoading: false,
                    videos: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.videos}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                            <View style={styles.item}>
                                <Text>{item.title}</Text>
                            </View>
                        }
                        keyExtractor={item => item.hash_id}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});

export default HomeTab