import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../../page-components/GroupStudy/ChatFeed';
import LoginForm from '../../page-components/GroupStudy/LoginForm';
import './styles.css'

const projectID = '83654b11-2e99-46a6-b580-0a1f224e2631';

const GroupStudying = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default GroupStudying;