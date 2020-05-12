import React, { Component } from 'react';
import { View, Text, Alert, ScrollView, ActivityIndicator, TouchableOpacity, Image, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Evilicon from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Modal from "react-native-modal";
import ImagePicker from 'react-native-image-crop-picker';

import styles from './EditProfile.style';

class EditProfile1 extends Component {

    constructor() {
        super()
        this.state = {
            spinner: false,
            bio: '',
            isModalVisible: false,
            profileImage: true,
        };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            this.setState({ spinner: true })
        }, 2500);
    }

    toggleModal() {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    gotoback() {
        Actions.pop();
    }

    selectFromGallery() {

        ImagePicker.openPicker({
            width: 175,
            height: 185,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }

    openCamera() {

        ImagePicker.openCamera({
            width: 175,
            height: 185,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    deleteImage() {
        this.setState({ profileImage: false })
        Alert.alert(
            'Delete Image',
            'Profile Image Successfully Deleted',
            [
                {
                    text: 'OK', onPress: () => {
                        console.log('OK Pressed')
                        this.setState({ isModalVisible: false })
                    }
                },
            ],
        );
    }

    renderModalContent() {

        return (
            <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => this.deleteImage()} style={styles.modalIcon}>
                    <Evilicon name='trash' size={45} color='#8C8893' />
                    <Text style={styles.modalIconText}>delete image</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.openCamera} style={[styles.modalIcon, { borderLeftWidth: 1 }]}>
                    <Evilicon name='camera' size={45} color='#8C8893' />
                    <Text style={styles.modalIconText}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.selectFromGallery} style={[styles.modalIcon, { borderLeftWidth: 1 }]}>
                    <Evilicon name='image' size={45} color='#8C8893' />
                    <Text style={styles.modalIconText}>Gallery</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        if (this.state.spinner) {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fcfbfb' }}>
                    <View style={styles.tabs}>
                        <TouchableOpacity onPress={this.gotoback}>
                            <Feather name='x' size={25} color='#fcfbfb' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.saveButton}>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bodyContainer}>
                        <View style={styles.imageContainer}>
                            {this.state.profileImage ?
                                <Image
                                    source={require('../../../res/img/1.jpg')}
                                    style={styles.image}
                                />
                                :
                                <View>
                                    <FontAwesome name='user-circle' size={185} color='#8C8893' />
                                </View>
                            }
                            <TouchableOpacity onPress={() => this.toggleModal()} style={styles.iconContainer}>
                                <Feather name='camera' size={25} color='#393b3e' />
                            </TouchableOpacity>
                            <Modal
                                isVisible={this.state.isModalVisible} style={styles.bottomModal}
                                onBackdropPress={() => this.setState({ isModalVisible: false })} //enables background click to disappear
                                onSwipeComplete={() => this.setState({ isVisible: false })} swipeDirection="down" //hides modal by swipping left
                            >
                                {this.renderModalContent()}
                            </Modal>
                        </View>

                        <View style={styles.userInformation}>
                            <Lineinput
                                placeholder="about me"
                                lable="About me"
                                value={this.state.bio}
                                onChangeText={text => this.setState({ bio: text })
                                }
                            />
                            <View style={styles.informationWrapper}>
                                <Text style={styles.lable}>First Name</Text>
                                <View>
                                    <Text style={styles.informationWrapperText}>Usmaila</Text>
                                </View>
                            </View>
                            <View style={styles.informationWrapper}>
                                <Text style={styles.lable}>Last Name</Text>
                                <View>
                                    <Text style={styles.informationWrapperText}>Abdoul</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.lable}>Location</Text>
                                <View style={styles.location}>
                                    <View>
                                        <Text style={styles.locationText}>Buea</Text>
                                    </View>
                                    <Evilicon name='location' size={25} color='#8C8893' />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            )
        }
        else {
            return (
                <View style={styles.ActivityIndicator}>
                    <ActivityIndicator size={"large"} color='#63004f' />
                </View>
            )

        }
    }
}

export default EditProfile1;