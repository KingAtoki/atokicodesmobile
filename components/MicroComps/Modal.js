import React from 'react';
import {StyleSheet, Modal, View} from 'react-native';

import Button from '../MicroComps/Button'

export default MenuModal = (props) => {
    
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.isOpen}>
          <View style={{marginTop: 22}}>
            <View>
              {props.children}
              <View style={styles.hideModalBtn}>
                <Button text='Hide Modal' connectedModal={props.name} toggleModal={props.toggleModal}/>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
    hideModalBtn: {
        alignSelf: 'center',
        marginTop: '20%'
    }
})

