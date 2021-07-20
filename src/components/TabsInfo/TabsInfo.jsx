import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000bff17',
    borderRadius: '10px',
    lineBreak: 'anywhere',
    width: '90vw',
  },
}));

const TabsInfo = () => {
  const { list } = useSelector((state) => state.single );
  const { categories, tags } = list
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList
            onChange={handleChange}
            aria-label="simple tabs example"
          >
          { categories.map((categorie, index) => {
            return (
              <Tab
                key={index}
                label={categorie.name}
                value={index}
                centered
              />
            )})
          }
          { tags.map((tag, index) => {
            return (
              <Tab
              key={index}
              label={tag.name}
              value={index +1}
              centered
            />
            )
          })}
          </TabList>
        </AppBar>
        { categories.map((categorie, index) => {
            return (
              <TabPanel
                key={index}
                value={index}
              >
                {categorie.description}
              </TabPanel>
            )})
          }
          { tags.map((tag, index) => {
            return (
              <TabPanel
              key={index}
              value={index += 1}
            >
              <p>Maiores informações:</p>
              <a href={tag.link}>{tag.link}</a>
            </TabPanel>
          )})
        }
      </TabContext>
    </div>
  );
}

export default TabsInfo;