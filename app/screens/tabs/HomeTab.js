import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet, FlatList} from "react-native";
import Api from "../../api/Api";

type Props = {};

export default class HomeTab extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            videos: null
        }
    }

    componentDidMount(): void {
        //this.loadPopularVideos();
        this.loadVideos();
    }

    loadVideos() {
        Api.getVideos(1, (videos) => {
                this.setState({
                    isLoading: false,
                    videos: videos
                });
            },
            (error) => {

            }
        );
    }

    loadPopularVideos() {
        Api.getPopularVideos((videos) => {
                console.log(videos);
                this.setState({
                    isLoading: false,
                    popularVideos: videos
                });
            },
            (error) => {

            }
        );
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
                                <Text>{item.getTitle()}</Text>
                            </View>
                        }
                        keyExtractor={item => item.hashId}
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