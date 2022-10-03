import React  from "react";
import styles from './style.module.scss'
import {motion, AnimatePresence} from 'framer-motion'
import {Card} from "./card";
import {ExpandCard} from "./ExpandCard";

const bots = [
  {
    id: 1,
    name: 'Economy',
    price: '8500₽',
    options: ['Duels', 'Shop', 'Role Manager', 'Love Rooms', 'Cases', 'Inventory', 'Transactions', 'Setup without code changing']
  }, // 4267 lines
  {
    id: 2,
    name: 'Moderation',
    price: '3000₽',
    options: ['List of user nicknames/punishments', 'Warnings', 'Mutes', 'Bans', 'Unlimited time of punishment', 'Direct message of punishment reason', 'Staff Profile']
  }, // 1507 lines
  {
    id: 3,
    name: 'Verification',
    price: '1400₽',
    options: ['Adding/Deleting Genders', 'Any genders', 'Verification mark feedback']
  }, // 730 lines
  {
    id: 4,
    name: 'Anti-Raid',
    price: '500₽',
    options: ['Setting up the time and limit of users in a given period of time', 'Kick With dm', 'Logs Channel']
  }, // 350 lines
  {
    id: 5,
    name: 'Anti-Crush',
    price: '1100₽',
    options: ['Logs Channel', 'Setting up the time and limit of actions in a given period of time', 'Roles /Channels /Kicks /Bans /Messages Pins']
  }, // 551 lines
  {
    id: 6,
    name: 'Events',
    price: '3000₽',
    options: ['Custom Mafia: registration for the event, distribution of game roles, sending personal messages with roles to the host and participants', 'Adding/Removing event', 'Reading a json file and installing it as a webhook for an invitation to an event', 'All/Week time profile', 'Creating Channels', 'Event Ban']
  }, // 1989 lines
  {
    id: 7,
    name: 'Close',
    price: '2000₽',
    options: ['CS:GO /Brawl Stars /Dota 2 /Valorant /League of Legends /Custom close', 'Close Ban', 'Admin Commands', 'Close 5x5', 'Registration to the team']
  }, // 1989 lines
  {
    id: 8,
    name: 'Staff sets',
    price: '600₽',
    options: ['Logs Channel']
  }, // 487 lines
];

export const BotCards = ({setSelectedId, selectedId}) => {
  return <div className={styles.box}>
    {bots.map((item, id) =>
      <Card key={id} item={item} onClick={setSelectedId} />
    )}
    <AnimatePresence>
      {selectedId !== null && (
        <motion.div className={styles['expand-wrapper']}>
          <ExpandCard
            item={bots[selectedId - 1]}
            selectedId={selectedId}
            onClick={setSelectedId}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
}