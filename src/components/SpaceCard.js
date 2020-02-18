import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

import Chance from "../assets/svgs/chance.svg";
import Chest from "../assets/svgs/chest.svg";

const SpaceCard = () => {
  const GameEngine = useContext(GameContext);
  const card = GameEngine.SpaceCard;
  const cardSpace = card.space;

  function closeSpaceCard(e) {
    if (e.target === document.querySelector(".space-card-background")) {
      GameEngine.removeSpaceCard();
    }
  }

  return (
    <div
      className="space-card-background"
      onClick={e => {
        closeSpaceCard(e);
      }}
    >
      <div className="space-card">
        <div className="outer-container">
          {cardSpace.group === "property" ? (
            <div className="container property">
              <div className={`title ${cardSpace.color}`}>
                <div className="title-deed">Title Deed</div>
                <div className="name">{cardSpace.name}</div>
              </div>
              <div className="info">
                <div className="rent">
                  RENT <span className="million">₩</span>
                  {cardSpace.rent[0]}
                </div>
                <div className="house-rent">
                  <div className="house-rent-item">
                    <div className="with-house">With 1 House</div>
                    <div className="house-rent-price">
                      <span className="million">₩</span> {cardSpace.rent[1]}
                    </div>
                  </div>
                  <div className="house-rent-item">
                    <div className="with-house">With 2 House</div>
                    <div className="house-rent-price">{cardSpace.rent[2]}</div>
                  </div>
                  <div className="house-rent-item">
                    <div className="with-house">With 3 House</div>
                    <div className="house-rent-price">{cardSpace.rent[3]}</div>
                  </div>
                  <div className="house-rent-item">
                    <div className="with-house">With 4 House</div>
                    <div className="house-rent-price">{cardSpace.rent[4]}</div>
                  </div>
                </div>
                <div className="hotel-rent">
                  With HOTEL <span className="million">₩</span>
                  {cardSpace.rent[5]}
                </div>

                <div className="costs">
                  <div className="mortgage-cost">
                    Mortgage Value <span className="million">₩</span>
                    {cardSpace.mortgageValue}
                  </div>
                  <div className="house-cost">
                    Houses cost <span className="million">₩</span>
                    {cardSpace.houseCost} each
                  </div>
                  <div className="hotel-cost">
                    Hotels, <span className="million">₩</span>
                    {cardSpace.houseCost}. Plus 4 houses
                  </div>
                </div>
              </div>

              <div className="extra-info">
                If a player owns ALL the Lots of any <br /> Color-Group, the
                rent is Doubled on <br /> Unimproved Lots in that group.
              </div>
              <div className="copyright"> &copy; 2020 Tommy, Inc.</div>
            </div>
          ) : cardSpace.group === "railroad" ? (
            <div className="container railroad">
              <div className="icon">
                <i className="drawing fas fa-subway"></i>
              </div>
              <div className="name">{cardSpace.name}</div>
              <div className="rent">
                <div className="rent-row">
                  <div className="rent-number">Rent</div>
                  <div className="rent-price">
                    <span className="million">₩</span>
                    {cardSpace.rent[0]}
                  </div>
                </div>
                <div className="rent-row">
                  <div className="rent-number">If 2 R.R.'s are owned</div>
                  <div className="rent-price">{cardSpace.rent[1]}</div>
                </div>
                <div className="rent-row">
                  <div className="rent-number">
                    If 3 &nbsp;'' &nbsp; &nbsp; '' &nbsp; &nbsp; &nbsp;''
                  </div>
                  <div className="rent-price">{cardSpace.rent[2]}</div>
                </div>
                <div className="rent-row">
                  <div className="rent-number">
                    If 4 &nbsp;'' &nbsp; &nbsp; '' &nbsp; &nbsp; &nbsp;''
                  </div>
                  <div className="rent-price">{cardSpace.rent[3]}</div>
                </div>
              </div>
              <div className="mortgage-value">
                <div className="mortgage">Mortgage Value</div>
                <div className="value">
                  <span className="million">₩</span>
                  {cardSpace.mortgageValue}
                </div>
              </div>
              <div className="copyright"> &copy; 2020 Tommy, Inc.</div>
            </div>
          ) : cardSpace.group === "utility" ? (
            <div className="container utility">
              <div className="icon">
                {cardSpace.type === "electric" ? (
                  <i className="drawing far fa-lightbulb"></i>
                ) : (
                  <i className="drawing fas fa-tint"></i>
                )}
              </div>
              <div className="name">{cardSpace.name}</div>
              <div className="rent">
                <p>
                  If one "Utility" is owned, rent is 4 times amount shown on
                  dice.
                </p>
                <p>
                  If both "Utiites" are owned, rent is 10 times amonut shown on
                  dice.
                </p>
              </div>
              <div className="copyright"> &copy; 2020 Tommy, Inc.</div>
            </div>
          ) : cardSpace.group === "fee" ? (
            <div className="container fee">
              {cardSpace.type === "luxury" ? (
                <div className="name"> Luxury Tax</div>
              ) : (
                <div className="name"> Income Tax</div>
              )}
              {cardSpace.type === "luxury" ? (
                <div className="drawing fa fa-diamond"></div>
              ) : (
                <div className="drawing">
                  <div className="diamond"></div>
                </div>
              )}
              {cardSpace.type === "luxury" ? (
                <div className="instructions">
                  Pay <span className="million">₩</span>75
                </div>
              ) : (
                <div className="instructions">
                  Pay 10% <br /> or <br /> <span className="million">₩</span>200
                </div>
              )}
            </div>
          ) : cardSpace.group === "action" ? (
            <div className="container">
              {cardSpace.type === "chance" ? (
                <div className="name"> Chance</div>
              ) : (
                <div className="name"> Community Chest</div>
              )}
              {cardSpace.type === "chance" ? (
                <div className="drawing">
                  <img src={Chance} alt="" />
                </div>
              ) : (
                <div className="drawing">
                  <img src={Chest} alt="" />
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
