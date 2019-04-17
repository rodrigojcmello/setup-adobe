import styled from 'styled-components/native';

export default {
  TelaScrollView: styled.ScrollView`
    flex: 1;
    background-color: blue;
  `,
  CpfView: styled.View`
    width: 90%;
    display: flex;
    flex-direction: row;
  `,
  CpfTextInput: styled.TextInput<{ focus: boolean }>`
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
    background-color: ${({ focus }): string => (focus ? '#ff5264' : '#63e4ff')};
    height: 42px;
    flex: 1;
  `,
  EnviarView: styled.View`
    background-color: #ff9800;
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0;
    height: 42px;
    padding-right: 12px;
    padding-left: 12px;
  `,
  EnviarText: styled.Text`
    color: black;
    line-height: 42px;
  `
};
