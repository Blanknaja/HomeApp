<View style={[styles.box2]}>
  <View style={styles.searchbarnaja}>
    <Search
      ref="search_box"
      backgroundColor="#F44336"
      placeholderTextColor="#000000"
    />
  </View>

  <View
    style={styles.Picker}
    onLayout={event => {
      const layout = event.nativeEvent.layout;
      console.log("height:", layout.height);
      console.log("width:", layout.width);
      console.log("x:", layout.x);
      console.log("y:", layout.y);
    }}
  >
    <ReactNativeItemSelect
      data={this.state.dataPicker}
      itemComponent={(item, selected) => (
        <View>
          {/* <Text style={{ ...textStyle, fontSize: 35 }}>
                      {item.picIcon}
                    </Text> */}
          <Icon
            name={item.iconName}
            type={item.type}
            color="#000000"
            size={40}
          />
          <Text style={textStyle}>{item.description}</Text>
        </View>
      )}
      onSubmit={item => this.handelgetData(item)}
      multiselect={true}
      countPerRow={3}
      submitBtnTitle="ค้นหา"
      tickPosition="topLeft"
      styles={{
        btn: {
          ...Platform.select({
            android: {
              backgroundColor: "#F44336",
              marginTop: hp("15.5%"),
              height: hp("6%"),
              width: wp("30%"),
              marginLeft: wp("10%")
            },
            ios: {
              backgroundColor: "#F44336",
              marginTop: hp("19%"),
              height: hp("6%"),
              width: wp("30%"),
              marginLeft: wp("10%")
            }
          })
        },
        disabledBtn: { backgroundColor: "#F44336" },
        tickTxt: { backgroundColor: "#F44336" },
        activeItemBoxHighlight: { borderColor: "#F44336" }
      }}
    />
  </View>

  <View style={styles.vSlider}>
    <Slider
      value={this.state.value}
      onValueChange={value => this.setState({ value })}
      step={1}
      minimumValue={0}
      maximumValue={10}
      maximumTrackTintColor="#FFF"
      trackStyle={customStyles2.track}
      thumbStyle={customStyles2.thumb}
      minimumTrackTintColor="#F44336"
    />
    <Text>Value: {this.state.value}</Text>
    {/* <View style={styles.vButton}>
                <Button style={{ backgroundColor: "#f4511e" }} title="แผนที่" />
              </View> */}
  </View>
</View>;
